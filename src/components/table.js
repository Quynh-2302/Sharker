import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const Admintable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
    {
      key: "2xlarge_win_2_0",
      name: "2X Large",
      status: "Active",
      support: "Windows",
      price: "$3.5",
      power: "1000",
      type: "nano",
      CPU: "2",
      ram: "0.5",
      monthy: "1024",
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "ID",
      dataIndex: "key",
      width: "20%",
      editable: true,
    },
    {
      title: "NAME",
      dataIndex: "name",
      width: "20%",
      editable: true,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to active?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a
              style={{
                color: "#3EBB13",
                background: "rgba(62, 187, 19, 0.16)",
                borderRadius: "3px",
                padding: "2px 5px",
              }}
            >
              Active
            </a>
          </Popconfirm>
        ) : null,
    },
    {
      title: "SUPPORT",
      dataIndex: "support",
    },
    {
      title: "PRICE",
      dataIndex: "price",
    },
    {
      title: "POWER",
      dataIndex: "power",
    },
    {
      title: "TYPE",
      dataIndex: "type",
    },
    {
      title: "CPU",
      dataIndex: "CPU",
    },
    {
      title: "RAM (GB)",
      width: "20%",
      dataIndex: "ram",
    },
    {
      title: "MONTHY TRANSFER",
      width: "40%",
      dataIndex: "monthy",
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      {/* <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button> */}
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered={false}
        dataSource={dataSource}
        columns={columns}
        size="middle"
      />
    </div>
  );
};
export default Admintable;
