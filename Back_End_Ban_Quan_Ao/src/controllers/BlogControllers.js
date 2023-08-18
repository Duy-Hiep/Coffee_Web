import blogModel from "../models/BlogModel.js";
export const getOneBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id)
    if (!blog) {
      return res.json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      blog,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.massage,
    });
  }
};
export const getAllBlog = async (req, res) => {
  try {
    const blog = await blogModel.find()
    if (!blog) {
      return res.status(404).json({
        message: "Lấy tài nguyên thất bại !",
      });
    }
    return res.json({
      message: "Lấy tài nguyên thành công !",
      blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const createBlog = async (req, res) => {
  try {
    const blog = await blogModel.create(req.body);
    if (!blog) {
      return res.json({
        message: "Thêm tài nguyên không thành công !",
      });
    }
    return res.json({
      message: "Thêm tài nguyên thành công !",
      blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const updateBlog = async (req, res) => {

  try {
    const blog = await blogModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (!blog) {
      return res.json({
        message: "Cập nhật tài nguyên không thành công !"
      })
    }
    return res.json({
      message: "Cập nhật tài nguyên thành công !",
      blog,
    })
  } catch (error) {
    return res.json(400).json({
      message: error,
    })
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa tài nguyên thành công !",
      blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
