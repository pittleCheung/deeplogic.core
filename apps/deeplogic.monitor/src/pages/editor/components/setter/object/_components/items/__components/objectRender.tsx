import { InputNumber, Select } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo } from 'react';
import {
  Bind,
  Color,
  Columns,
  DatePicker,
  Device,
  IconPicker,
  ImageSetter,
  Links,
  Panel,
  PointSource,
  SubSystem,
  Template
} from '../../../../_components';
import { isObjectWithBindAndType, object2Options } from '../../../../_helper/utils';
import useObject from '../../../../_hooks/useObject';
import ArraySetter from '../../../../array';
import BooleanSetter from '../../../../bool';
import JSONSetter from '../../../../json';
import Segmented from '../../../../segmented';
import StringSetter from '../../../../string';
import ObjectSetter from '../../../object';

function ObjectRender({ propType, ...props }) {
  const objectData = useObject();
  const isBind = isObjectWithBindAndType(props?.value);
  const title = props?.title?.label || props?.title;
  const field = { ...objectData, ...props, title };

  const propTypeToComponent = {
    links: <Links {...field} />,
    color: <Color {...field} />,
    date: <DatePicker {...field} />,
    json: <JSONSetter {...field} />,
    columns: <Columns {...field} />,
    icon: <IconPicker {...field} />,
    template: <Template {...field} />,
    point: <PointSource {...field} />,
    image: <ImageSetter {...field} />,
    string: <StringSetter {...field} />,
    segmented: <Segmented {...field} />,
    subSystem: <SubSystem {...field} />,
    boolean: <BooleanSetter {...field} />,
    array: <ArraySetter {...field} attribute={field?.props} />,
    device: <Device {...field} items={objectData?.data?.devices || []} />,
    number: <InputNumber value={field?.value} onChange={field?.onChange} max={field?.max} min={field?.min} />,
    select: <Select value={field?.value} onChange={field?.onChange} options={object2Options(field.values)} allowClear />,
    object: (
      <Panel title={title} open>
        <ObjectSetter {...field} items={field.props} />
      </Panel>
    )
  };

  return isBind ? <Bind value={props?.value} onClose={() => field?.onUnbind(props?.name)} /> : propTypeToComponent[propType];
}

export default memo(ObjectRender, equal);
