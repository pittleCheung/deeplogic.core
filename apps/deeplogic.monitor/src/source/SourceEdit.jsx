import config from '%config';
import { KNX_SPECS_OPTIONS } from '@/utils/config';
import { InfoCircleOutlined } from '@ant-design/icons';
import useEditForm from '@hooks/useEditForm';
import { Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Switch, Tooltip } from 'antd';
import { connect } from 'umi';

const { DICT_CATES } = config
function SourceEdit({ dispatch, source, editModalVisible, loading, Dicts }) {
  const title = source.F_SOURCE_ID === '-1' ? '添加驱动' : '编辑驱动';

  const { form, onSave, onCancel } = useEditForm({
    dispatch,
    model: source,
    saveAction: 'sources/save',
    cancelAction: 'sources/cancel',
    loading
  });

  const handleTypeChanged = (v) => {
    form.setFieldsValue({ F_SPEC: undefined });
  };

  return (
    <Modal title={title} onOk={onSave} width={860} onCancel={onCancel} maskClosable={false} open={editModalVisible}>
      <Spin spinning={loading}>
        <Form
          layout='horizontal'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          // initialValues={source}
          id='sourceEditForm'
          autoComplete='off'
        >
          <Row type='flex'>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
                label='名称'
                name='F_NAME'
                rules={[{ required: true, message: '请输入数据源名称' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='驱动' name='F_TYPE' rules={[{ required: true, message: '请选择' }]}>
                <Select onChange={handleTypeChanged}>
                  {Object.keys(Dicts[DICT_CATES.数据驱动类型]).map((k) => (
                    <Select.Option key={k} value={k}>
                      {Dicts[DICT_CATES.数据驱动类型][k]}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle shouldUpdate={(prevValues, curValues) => prevValues.F_TYPE !== curValues.F_TYPE}>
                {({ getFieldValue }) => {
                  switch (getFieldValue('F_TYPE')) {
                    case 'SIEMENS_S7':
                      return (
                        <Form.Item label='类型' name='F_SPEC' rules={[{ required: true, message: '请选择连接方式' }]}>
                          <Select>
                            <Select.Option key='S7200' value='S7200'>
                              S7200
                            </Select.Option>
                            <Select.Option key='S7200Smart' value='S7200Smart'>
                              S7200Smart
                            </Select.Option>
                            <Select.Option key='S7300' value='S7300'>
                              S7300
                            </Select.Option>
                            <Select.Option key='S7400' value='S7400'>
                              S7400
                            </Select.Option>
                            <Select.Option key='S71200' value='S71200'>
                              S71200
                            </Select.Option>
                            <Select.Option key='S71500' value='S71500'>
                              S71500
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'MEGATECEX':
                    case 'MODBUS':
                      return (
                        <Form.Item label='连接方式' name='F_SPEC' rules={[{ required: true, message: '请选择连接方式' }]}>
                          <Select>
                            <Select.Option key='TCP' value='TCP'>
                              TCP
                            </Select.Option>
                            <Select.Option key='RTU' value='RTU'>
                              RTU
                            </Select.Option>
                            <Select.Option key='RTU_TCP' value='RTU_TCP'>
                              RTU Over TCP
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'OPC':
                      return (
                        <Form.Item label='类型' name='F_SPEC' rules={[{ required: true, message: '请选择OPC类型' }]}>
                          <Select>
                            <Select.Option key='DA' value='DA'>
                              DA
                            </Select.Option>
                            <Select.Option key='UA' value='UA'>
                              UA
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'HISDB':
                      return (
                        <Form.Item label='粒度' name='F_SPEC' rules={[{ required: true, message: '请选择时间粒度' }]}>
                          <Select>
                            <Select.Option key='30 seconds' value='30 seconds'>
                              30秒
                            </Select.Option>
                            <Select.Option key='1 minute' value='1 minute'>
                              1分钟
                            </Select.Option>
                            <Select.Option key='5 minutes' value='5 minutes'>
                              5分钟
                            </Select.Option>
                            <Select.Option key='30 minutes' value='30 minutes'>
                              30分钟
                            </Select.Option>
                            <Select.Option key='1 hour' value='1 hour'>
                              1小时
                            </Select.Option>
                            <Select.Option key='1 day' value='1 day'>
                              1天
                            </Select.Option>
                            <Select.Option key='1 week' value='1 week'>
                              1周
                            </Select.Option>
                            <Select.Option key='30 days' value='30 days'>
                              1个月
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'BACNET':
                      return (
                        <Form.Item label='读取方式' name='F_SPEC' rules={[{ required: true, message: '请选择读取方式' }]}>
                          <Select>
                            <Select.Option key='0' value='0'>
                              POLL（轮询）
                            </Select.Option>
                            <Select.Option key='1' value='1'>
                              COV（订阅）
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'SNMP':
                      return (
                        <Form.Item label='版本' name='F_SPEC' rules={[{ required: true, message: '请选择驱动版本' }]}>
                          <Select>
                            <Select.Option key='v1' value='v1'>
                              V1
                            </Select.Option>
                            <Select.Option key='v2' value='v2'>
                              V2
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'IEC104':
                      return (
                        <Form.Item label='驱动参数' name='F_SPEC'>
                          <Input placeholder='指定 COT|OA|CA' />
                        </Form.Item>
                      );
                    case 'MQTT':
                      return (
                        <Form.Item label='版本' name='F_SPEC' rules={[{ required: true, message: '请选择驱动版本' }]}>
                          <Select>
                            <Select.Option key='v310' value='v310'>
                              V3
                            </Select.Option>
                            <Select.Option key='v311' value='v311'>
                              V4
                            </Select.Option>
                            <Select.Option key='v500' value='v500'>
                              V5
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'ALI_IGATE_API':
                      return (
                        <Form.Item label='⽤户标识' name='F_SPEC' rules={[{ required: true, message: '请输入⽤户标识' }]}>
                          <Input placeholder='⽤户标识 tenantCode' />
                        </Form.Item>
                      );
                    case 'KNX':
                      return (
                        <Form.Item label='连接方式' name='F_SPEC' rules={[{ required: true, message: '请选择连接方式' }]}>
                          <Select options={KNX_SPECS_OPTIONS} />
                        </Form.Item>
                      );
                    default:
                      return (
                        <Form.Item label='驱动参数' name='F_SPEC'>
                          <Input />
                        </Form.Item>
                      );
                  }
                }}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.F_TYPE !== curValues.F_TYPE || prevValues.F_SPEC !== curValues.F_SPEC
                }
              >
                {({ getFieldValue }) => {
                  switch (getFieldValue('F_TYPE')) {
                    case 'DOM':
                    case 'ALI_IGATE_API':
                      return (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入接口地址' },
                            { type: 'url', message: '请输入正确的 url 地址' }
                          ]}
                        >
                          <Input placeholder='http://x.x.x.x/' />
                        </Form.Item>
                      );
                    case 'FIRE_ALARM':
                      return (
                        <Form.Item label='串口' name='F_ADDRESS'>
                          <Input placeholder='COM1' />
                        </Form.Item>
                      );
                    case 'MODBUS':
                      return getFieldValue('F_SPEC') === 'TCP' ? (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入设备地址' },
                            {
                              pattern:
                                /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,4})?\b/g,
                              message: '请输入正确的地址 <ip>:<port>'
                            }
                          ]}
                        >
                          <Input placeholder='ip:port' />
                        </Form.Item>
                      ) : (
                        <Form.Item label='串口' name='F_ADDRESS'>
                          <Input placeholder='COM1' />
                        </Form.Item>
                      );
                    case 'DeepSight':
                    case 'DEEPSIGHT':
                    case 'THINKBOS':
                      return (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入接口地址' },
                            {
                              pattern: /^[^:]+(:[\d]{1,5})*$/i,
                              message: '请输入正确的地址 <ip>:<port>'
                            }
                          ]}
                        >
                          <Input placeholder='ip:port' />
                        </Form.Item>
                      );
                    case 'HISDB':
                      return (
                        <Form.Item name='F_ADDRESS' label='聚合' rules={[{ required: true, message: '请选择聚合方式' }]}>
                          <Select>
                            <Select.Option key='first' value='first'>
                              first
                            </Select.Option>
                            <Select.Option key='last' value='last'>
                              last
                            </Select.Option>
                            <Select.Option key='avg' value='avg'>
                              average
                            </Select.Option>
                            <Select.Option key='min' value='min'>
                              minimum
                            </Select.Option>
                            <Select.Option key='max' value='max'>
                              maximum
                            </Select.Option>
                            <Select.Option key='sum' value='sum'>
                              sum
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    case 'OPC':
                      return getFieldValue('F_SPEC') === 'DA' ? (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入OPC地址' },
                            {
                              pattern: /^opcda:\/\/.+$/i,
                              message: '请输入正确的地址 opcda://localhost/<opc_server_instance_name>'
                            }
                          ]}
                        >
                          <Input placeholder='opcda://localhost/Kepware.KEPServerEX.V6' />
                        </Form.Item>
                      ) : (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入OPC地址' },
                            {
                              pattern: /^opc\.tcp:\/\/.+$/i,
                              message: '请输入正确的地址 opc.tcp://ip:port'
                            }
                          ]}
                        >
                          <Input placeholder='opc.tcp://ip:port' />
                        </Form.Item>
                      );
                    case 'BACNET':
                      return (
                        <Form.Item label='网卡地址' name='F_ADDRESS'>
                          <Input placeholder='本地网卡 ip' />
                        </Form.Item>
                      );
                    case 'SIEMENS_S7':
                    case 'SNMP':
                    case 'MQTT':
                    case 'IEC104':
                      return (
                        <Form.Item
                          label='地址'
                          name='F_ADDRESS'
                          rules={[
                            { required: true, message: '请输入连接地址' },
                            {
                              pattern: /^[^:]+(:[\d]{1,5})*$/i,
                              message: '请输入正确的地址 <ip>:<port>'
                            }
                          ]}
                        >
                          <Input placeholder='连接地址（可包括端口，省略端口时使用默认端口）' />
                        </Form.Item>
                      );
                    default:
                      return (
                        <Form.Item label='地址' name='F_ADDRESS'>
                          <Input />
                        </Form.Item>
                      );
                  }
                }}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.F_TYPE !== curValues.F_TYPE || prevValues.F_SPEC !== curValues.F_SPEC
                }
              >
                {({ getFieldValue }) => {
                  switch (getFieldValue('F_TYPE')) {
                    case 'MODBUS':
                      return getFieldValue('F_SPEC') === 'TCP' ? (
                        <Form.Item label='最大读取长度' name='F_PARAMETER'>
                          <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                      ) : (
                        <Form.Item label='串口参数' name='F_PARAMETER'>
                          <Input placeholder='波特率|数据位数|校验位|停止位|读取最大长度' />
                        </Form.Item>
                      );
                    case 'FIRE_ALARM':
                      return (
                        <Form.Item label='串口参数' name='F_PARAMETER'>
                          <Input placeholder='波特率|数据位数|校验位|停止位' />
                        </Form.Item>
                      );
                    case 'SIEMENS_S7':
                      return (
                        <Form.Item label='参数' name='F_PARAMETER'>
                          <Input placeholder='输入rack和slot，以|间隔' />
                        </Form.Item>
                      );
                    case 'SNMP':
                      return (
                        <Form.Item label='Community' name='F_PARAMETER'>
                          <Input placeholder='public' />
                        </Form.Item>
                      );
                    case 'BACNET':
                      return (
                        <Form.Item label='参数' name='F_PARAMETER'>
                          <Input
                            placeholder='优化级[|单个点的长度|并发数]'
                            suffix={
                              <Tooltip title='优先级默认为0，可以是0-16之间的数字，最高级16，如果写数据无权限时可尝试配置优先级为8；单个点的长度（可选），默认26，如读取异常或缓存溢出时可调大此数值，每次读取条数为ADPU/单个点长度，调大此值可减少每次读取条数；并发数（可选），-1=系统默认，1=单线程，其他数值=指定的线程数'>
                                <InfoCircleOutlined />
                              </Tooltip>
                            }
                          />
                        </Form.Item>
                      );
                    case 'MQTT':
                      return (
                        <Form.Item name='F_PARAMETER' label='QoS' rules={[{ required: true, message: '请选择消息质量' }]}>
                          <Select>
                            <Select.Option key='0' value='0'>
                              最多分发一次(0)
                            </Select.Option>
                            <Select.Option key='1' value='1'>
                              至少分发一次(1)
                            </Select.Option>
                            <Select.Option key='2' value='2'>
                              只分发一次(2)
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    default:
                      return (
                        <Form.Item label='参数' name='F_PARAMETER'>
                          <Input />
                        </Form.Item>
                      );
                  }
                }}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='频率'
                name='F_INTERVAL'
                rules={[
                  {
                    required: true,
                    type: 'number',
                    transform: (v) => v && Number(v),
                    message: '*'
                  },
                  {
                    min: 200,
                    type: 'number',
                    transform: (v) => v && Number(v),
                    message: '不能小于200'
                  }
                ]}
              >
                <Input suffix='毫秒' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='读写超时'
                name='F_TIMEOUT'
                rules={[
                  {
                    required: true,
                    type: 'number',
                    transform: (v) => v && Number(v),
                    message: '*'
                  },
                  {
                    min: 3000,
                    type: 'number',
                    transform: (v) => v && Number(v),
                    message: '不能小于3000'
                  }
                ]}
              >
                <Input suffix='毫秒' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='用户名' name='F_USERNAME'>
                <Input autoComplete='new-password' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='连接超时'
                name='F_PAR'
                rules={[
                  {
                    min: 5000,
                    type: 'number',
                    transform: (v) => v && Number(v),
                    message: '不能小于5000'
                  }
                ]}
              >
                <Input suffix='毫秒' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='密码' name='F_PASSWORD'>
                <Input type='password' autoComplete='new-password' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='状态' name='F_DRVLIB'>
                <Switch checkedChildren='启用' unCheckedChildren='禁用' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </Modal>
  );
}

function mapStateToProps(state) {
  const { source, editModalVisible } = state.sources;
  const { Dicts } = state.commons;
  return {
    Dicts,
    editModalVisible,
    source,
    loading: state.loading.models.sources
  };
}

export default connect(mapStateToProps)(SourceEdit);
