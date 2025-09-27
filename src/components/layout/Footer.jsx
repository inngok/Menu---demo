import { Row, Col, Typography, Space, Divider, Button } from "antd";
import {
  CheckCircleFilled,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#0099CF] text-white py-10 md:px-16 px-8">
              <div className="items-center space-x-2 mb-4">
                <span className="font-bold text-xl text-white">Quán cơm 405</span>
              </div>
              
              <p className="text-white mb-4">
                Quán cơm – Mang đến những bữa trưa đậm đà hương vị với hơn 20 món ăn đa dạng, phong phú và mức giá hợp lý.
Nằm ngay trung tâm Quận 10, thuận tiện cho bạn thưởng thức mỗi ngày.
              </p>
              <Space direction="vertical" size="small" className="text-white">
                <div className="flex items-start">
                  <EnvironmentOutlined className="text-white text-lg mr-2 mt-1" />
                  <span> Quận 10, TPHCM </span>
                </div>
                <div className="flex items-center">
                  <PhoneOutlined className="text-white text-lg mr-2" />
                  <span>Hotline: 0123456789 (Zalo)</span>
                </div>
                <div className="flex items-center">
                  <MailOutlined className="text-white text-lg mr-2" />
                  <span>jennie@gmail.com</span>
                </div>
              </Space>
      </div>

      <div className="bg-gray-900 text-gray-400 py-4 px-8">
        <div className="mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Nini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
