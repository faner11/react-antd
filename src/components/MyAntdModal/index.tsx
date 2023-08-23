/* eslint-disable react/jsx-props-no-spreading */
import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';

interface MyAntdModalProps extends ModalProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any> | any;
}
function MyAntdModal(props: MyAntdModalProps) {
  const modal = useModal();
  const [loading, setLoading] = useState(false);
  const { onOk } = props;
  return (
    <Modal
      {...antdModalV5(modal)}
      {...props}
      okButtonProps={{
        loading,
      }}
      onOk={(e) => {
        if (props?.onOk != null && onOk?.constructor.name === 'AsyncFunction') {
          setLoading(true);
          onOk?.(e)?.finally(() => {
            setLoading(false);
          });
        }
        modal.resolve('ok');
        modal.hide();
      }}
    />
  );
}
export default NiceModal.create(MyAntdModal);
