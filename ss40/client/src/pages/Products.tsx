import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import {
  fetchProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  type Product,
} from "../features/productSlice";

type ProductStatus = "active" | "inactive";

async function uploadImage(file: File): Promise<string> {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "ex_react");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dll6mpwhk/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  if (!res.ok) throw new Error("Upload thất bại");
  const json = await res.json();
  return json.secure_url;
}

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.product);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form] = Form.useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fileList, setFileList] = useState<any[]>([]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Lọc dữ liệu
  const filtered = useMemo(() => {
    return products
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [products, search, statusFilter]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // Cột bảng
  const columns: ColumnsType<Product> = [
    { title: "Mã", dataIndex: "code" },
    { title: "Tên", dataIndex: "name" },
    { title: "Giá", dataIndex: "price" },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    { title: "Trạng thái", dataIndex: "status" },
    {
      title: "Thao tác",
      render: (_, row) => (
        <>
          <Button onClick={() => onEdit(row)} type="link">
            Sửa
          </Button>
          <Button
            danger
            onClick={() => dispatch(deleteProduct(row.id))}
            type="link"
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  // Thêm/Sửa
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(values: any) {
    let imageUrl = editing?.image ?? "";

    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      imageUrl = await uploadImage(file);
    }

    const newData: Product = {
      ...values,
      id: editing?.id ?? uuidv4(),
      image: imageUrl,
    };

    if (editing) {
      dispatch(updateProduct(newData));
      message.success("Cập nhật thành công");
    } else {
      dispatch(addProduct(newData));
      message.success("Thêm thành công");
    }

    setOpen(false);
    form.resetFields();
    setFileList([]);
    setEditing(null);
  }

  function onEdit(row: Product) {
    setEditing(row);
    setOpen(true);
    form.setFieldsValue(row);
    setFileList([]);
  }

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          allowClear
          placeholder="Lọc trạng thái"
          onChange={(v) => setStatusFilter(v || "")}
        >
          <Select.Option value="active">Hoạt động</Select.Option>
          <Select.Option value="inactive">Ngừng</Select.Option>
        </Select>
        <Button onClick={() => setOpen(true)}>Thêm sản phẩm</Button>
      </div>

      <Table
        columns={columns}
        dataSource={paginated}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        total={filtered.length}
        pageSize={pageSize}
        current={page}
        onChange={setPage}
      />

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onSubmit} layout="vertical">
          <Form.Item name="code" label="Mã" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Giá" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Ảnh">
            <Upload
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
            {editing?.image && (
              <Image src={editing.image} width={80} className="mt-2" />
            )}
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="active">Hoạt động</Select.Option>
              <Select.Option value="inactive">Ngừng</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
