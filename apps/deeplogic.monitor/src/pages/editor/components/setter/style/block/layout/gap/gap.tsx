import { SplitCellsHorizontal, SplitCellsVertical } from '@/components/icons';
import { InputNumber } from 'antd';
import { Field, Tooltip } from '../../../../_components';
import useSetter from '../../../../_hooks/useSetter';
import css from './gap.module.less';

function Gap() {
  const { styleData, onChange } = useSetter();
  const isWrap = styleData?.flexWrap === 'wrap';
  const isRow = styleData?.flexDirection === 'row';
  const isColumn = styleData?.flexDirection === 'column';

  return (
    <div className={css.gap}>
      {(isWrap || isRow) && (
        <Field
          label={
            <Tooltip title={'水平间距'}>
              <SplitCellsHorizontal />
            </Tooltip>
          }
          className={css.item}
        >
          <InputNumber
            value={styleData?.columnGap}
            variant={'borderless'}
            min={0}
            onChange={(columnGap) => onChange({ columnGap })}
          />
        </Field>
      )}
      {(isWrap || isColumn) && (
        <Field
          label={
            <Tooltip title={'垂直间距'}>
              <SplitCellsVertical />
            </Tooltip>
          }
          className={css.item}
        >
          <InputNumber value={styleData?.rowGap} variant={'borderless'} min={0} onChange={(rowGap) => onChange({ rowGap })} />
        </Field>
      )}
    </div>
  );
}

export default Gap;
