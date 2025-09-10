# Check if the current branch is main
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
    echo "Error: This script can only be run on the main branch."
    echo "Current branch: $current_branch"
    exit 0
fi
# Get the bumped version
version=$(pnpm exec git-cliff --bumped-version)
echo "Bumped version: $version"

# Generate a new CHANGELOG
pnpm exec git-cliff --bump -o
pnpm version $version --no-git-tag-version
git add CHANGELOG.md
git add package.json
git commit -m "chore(release): $version"
git push

# Git tag
git tag -a "$version" -m "chore(release): $version"

git push --tags
