import { Product } from '@/types/Product'
import { Button, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { FiEdit2 } from 'react-icons/fi'

const { Text } = Typography

interface ImportNormalColumnProps {
  // pagination: any
}

export const getColumns = ({} // pagination,
: ImportNormalColumnProps): ColumnsType<Product> => [
  // {
  //   title: 'ลำดับ',
  //   dataIndex: 'no',
  //   key: 'no',
  //   width: 71,
  //   fixed: 'left',

  //   render: (value, record, index) => {
  //     const { current, pageSize } = pagination
  //     if (current && pageSize) {
  //       return <p>{(current - 1) * pageSize + index + 1}</p>
  //     }
  //     return null
  //   },
  // },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    ellipsis: true,
    width: 70,

    render(value, record) {
      return value
    },
  },
  {
    title: 'Product name',
    dataIndex: 'productName',
    key: 'productName',
    ellipsis: true,
    width: 140,

    render(value, record) {
      return value
    },
  },
  {
    title: 'Product Description',
    dataIndex: 'productDescription',
    key: 'productDescription',
    ellipsis: true,
    width: 120,

    render(value, record) {
      return value
    },
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Input',
    dataIndex: 'input',
    key: 'input',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Output',
    dataIndex: 'output',
    key: 'output',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Created date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Project name',
    dataIndex: 'projectName',
    key: 'projectName',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'Project NO.',
    dataIndex: 'projectNo',
    key: 'projectNo',
    ellipsis: true,
    width: 101,

    render(value) {
      return value
    },
  },
  {
    title: 'ACTION',
    key: 'action',
    dataIndex: 'action',
    width: 170,
    align: 'center',
    fixed: 'right',
    ellipsis: true,
    render: (value, record) => (
      <div className="flex justify-center items-center gap-4">
        <Button
          type="text"
          className="!flex !items-center !justify-center"
          icon={<FiEdit2 />}
          // onClick={() => handleEdit && handleEdit(record)}
        />
      </div>
    ),
  },
]
