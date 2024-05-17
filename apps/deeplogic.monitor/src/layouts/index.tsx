import React from "react"
import { Layout, Typography } from "antd"
import { Outlet } from "react-router-dom"
// import useStyles from "./style"

export default function Index() {
  // const classes = useStyles()
  return (
    <Layout>
      {/* <Layout.Header className={classes.header}>
        <Typography.Text>DeepLogic</Typography.Text>
      </Layout.Header> */}
      <Outlet />
      {/* <Layout.Footer className={classes.footer}>
        Copyright @2024 Deepctrls
      </Layout.Footer> */}
    </Layout>
  )
}
