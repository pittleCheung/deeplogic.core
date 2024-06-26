import { Col, InputNumber, Row } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import Field from '../field';
import { radiusType, sideType } from './config.json';
import css from './sides.module.less';

function Sides({ open, value = { top: 0, right: 0, bottom: 0, left: 0 }, onChange, type = 'side' }) {
  const data = (type === 'side' ? sideType?.dataList : radiusType.dataList) || [];

  return (
    <>
      {open && (
        <AnimatePresence>
          <motion.div
            className={css.sides}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.15 }}
          >
            <Field bordered={false}>
              <Row gutter={6}>
                {data.map((type) => {
                  return (
                    <Col key={type.value} span={6} title={type.label}>
                      <Field>
                        <InputNumber
                          variant={'borderless'}
                          className={css[type.value]}
                          min={0}
                          value={value[type.value]}
                          onChange={(value) => onChange?.({ key: type.value, value })}
                        />
                      </Field>
                    </Col>
                  );
                })}
              </Row>
            </Field>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default memo(Sides);
