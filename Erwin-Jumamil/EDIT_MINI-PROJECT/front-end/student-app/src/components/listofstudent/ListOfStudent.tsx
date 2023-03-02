import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getStudentaction } from "../../features/student/studentAction";
import { ModalDelete } from "../../modal/modalDelete";
import { removeStudentData } from "../../features/student/studentSlice";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import type { ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";

export const ListOfStudent: React.FC = () => {
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.student.students);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [studentpass, setstudentPass] = useState<string>();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  useEffect(() => {
    dispatch(getStudentaction());
  }, []);
  useEffect(() => {
    dispatch(removeStudentData());
  }, []);
  const closeModal = (): void => {
    setModalVisibility(false);
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: string): ColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="default"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });
  const columns = [
    {
      title: "#",
      key: "index",
      render: (_text: string, _record: any, index: number) => index + 1,
    },
    {
      title: "FullName",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Guardian's Name",
      dataIndex: "guardiansname",
      key: "guardiansname",
    },
    {
      title: "I wanna be",
      dataIndex: "dream",
      key: "dream",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Button
            className="bg-yellow-400"
            onClick={() => (window.location.href = `addstudent/${record._id}`)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setModalVisibility(true);
              setstudentPass(() => record);
            }}
          >
            Delete
          </Button>
          {modalVisibility ? (
            <ModalDelete students={studentpass} closeModal={closeModal} />
          ) : null}
        </Space>
      ),
    },
  ];

  return (
    <div className="flex justify-center my-7">
      <div className=" w-9/12">
        <Table dataSource={students} columns={columns} />
      </div>
    </div>
  );
};
