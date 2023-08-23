import { Typography } from 'antd';
import { useAtomValue } from 'jotai';

import { countObjAtom } from '../atom';

export default function Demo() {
  const countObj = useAtomValue(countObjAtom);

  return (
    <>
      <Typography.Title level={4}>DEMO 2</Typography.Title>
      <Typography.Text>
        const :
        {countObj.count}
      </Typography.Text>
    </>
  );
}
