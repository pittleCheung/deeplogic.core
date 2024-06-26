import { ShapeLine } from '@/components/icons';
import { Select } from 'antd';
import { memo } from 'react';
import { Field, Panel } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { position } from './config.json';
import Final from './final';

function Position() {
  const { open, styleData, onChange } = useSetter();

  return (
    <Panel title='位置' open={open}>
      <Field label={<ShapeLine size={'inherit'} />}>
        <Select
          value={styleData.position}
          options={position.dataList}
          onChange={(value) => onChange({ position: value })}
          placeholder='请选择'
          variant={'borderless'}
        />
      </Field>
      {(styleData.position === 'absolute' || styleData.position === 'fixed') && (
        <Field bordered={false}>
          <Final />
        </Field>
      )}
    </Panel>
  );
}

export default memo(Position);
