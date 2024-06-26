import { ObjectSetter } from '../../setter';
import useSettings from '../useSettings';
import css from "./attribute.module.less"

function Attribute() {
  const { pages, data, custom, nodeId, form, onBind, onUnbind, onUpload, formValues, projId, setProp } = useSettings();

  return (
    <div className={css.fields}>
      <ObjectSetter
        data={data}
        form={form}
        pages={pages}
        projId={projId}
        setProp={setProp}
        values={formValues}
        items={custom?.props}
        onUpload={onUpload}
        onBind={(name) => onBind?.({ id: nodeId, name })}
        onUnbind={(name) => onUnbind?.({ id: nodeId, name })}
      />
    </div>
  );
}

export default Attribute;
