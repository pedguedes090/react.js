import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import {
  fetchCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  type Category,
} from "../features/categorySlice";

type CategoryStatus = "active" | "inactive";

export default function Categories() {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((s: RootState) => s.category);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return categories
      .filter((c) =>
        search ? c.name.toLowerCase().includes(search.toLowerCase()) : true
      )
      .filter((c) => (statusFilter ? c.status === statusFilter : true));
  }, [categories, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<Category> = [
    { title: "Tên", dataIndex: "name" },
    { title: "Mô tả", dataIndex: "description" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      render: (_, row) => (
        <div className="flex gap-2">
          <Button type="link" onClick={() => onEdit(row)}>
            Sửa
          </Button>
          <Button danger type="link" onClick={() => onDelete(row.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(values: any) {
    const newData: Category = {
      ...values,
      id: editing?.id ?? uuidv4(),
    };

    if (editing) {
      await dispatch(updateCategory(newData));
      message.success("Cập nhật thành công");
    } else {
      await dispatch(addCategory(newData));
      message.success("Thêm thành công");
    }

    setOpen(false);
    setEditing(null);
    form.resetFields();
  }

  function onEdit(row: Category) {
    setEditing(row);
    setOpen(true);
    form.setFieldsValue(row);
  }

  function onDelete(id: string) {
    dispatch(deleteCategory(id));
    message.success("Xóa thành công");
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={() => setOpen(true)}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          style={{ width: "200px" }}
          allowClear
          onChange={(v) => setStatusFilter((v as CategoryStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm"
          style={{ width: "300px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => form.submit()}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
