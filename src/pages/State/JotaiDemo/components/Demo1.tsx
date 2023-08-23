import { Typography } from 'antd';
import { useAtomValue } from 'jotai';

import { countObjAtom } from '../atom';

function Demo1() {
  const countObj = useAtomValue(countObjAtom);
  return (
    <>
      <Typography.Title level={4}>DEMO 1</Typography.Title>
      <Typography.Text>
        const :
        {countObj.count}
      </Typography.Text>
    </>
  );
}
export default Demo1;
