import { ArrowGoBackLine, ArrowGoForwardLine } from "@/components/icons"
import { SaveOutlined } from "@ant-design/icons"
import { Button, Layout, Popconfirm, Space, Typography } from "antd"
import { useDesigner, useToolbar } from "../../hooks"
import css from "./toolbar.module.less"
import { memo } from "react"

function Toolbar() {
  const { loading, layout, sidebar } = useDesigner()
  // const {
  //   enabled,
  //   undid,
  //   redid,
  //   onUndo,
  //   onRedo,
  //   onPreview,
  //   onSave,
  //   onGenerate,
  // } = useToolbar()
  const {
    enabled = true,
    undid = "",
    redid = "",
    onUndo = () => {},
    onRedo = () => {},
    onPreview = () => {},
    onSave = () => {},
    onGenerate = () => {},
  } = {}

  return (
    <Layout.Header className={css.toolbar}>
      <div className={css.title} align="center">
        <Typography.Title className={css.text} level={5} ellipsis>
          {layout?.content?.F_TITLE || "未命名页面"}
        </Typography.Title>
        {enabled && (
          <div className={css.action}>
            <Button
              disabled={!undid}
              size="small"
              type="text"
              icon={<ArrowGoBackLine />}
              onClick={() => onUndo()}
            />
            <Button
              disabled={!redid}
              size="small"
              type="text"
              icon={<ArrowGoForwardLine />}
              onClick={() => onRedo()}
            />
          </div>
        )}
      </div>
      <Space>
        <Popconfirm
          title="确认重新生成项目？"
          description="重新生成项目会清空所有页面，请确认是否重新生成"
          onConfirm={onGenerate}
          okText=" 是 "
          cancelText=" 否 ">
          <Button type="text">生成</Button>
        </Popconfirm>

        {sidebar?.page?.pageId && (
          <Button type="text" onClick={onPreview}>
            {enabled ? "预览" : "编辑"}
          </Button>
        )}
        <Button
          icon={<SaveOutlined />}
          disabled={!enabled}
          type="primary"
          onClick={onSave}
          loading={loading}>
          保存
        </Button>
      </Space>
    </Layout.Header>
  )
}

export default memo(Toolbar)
