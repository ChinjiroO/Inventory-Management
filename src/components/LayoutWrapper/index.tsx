'use client'

import { Layout, Menu } from 'antd'
import Image from 'next/image'
import React from 'react'

const { Content, Footer, Sider } = Layout

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />

        <Menu theme="light" mode="inline" items={[]} />
      </Sider>

      <Layout className="site-layout max-[992px]:ml-0 ml-[200px]">
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="bg-white text-center p-6">{children}</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default LayoutWrapper
