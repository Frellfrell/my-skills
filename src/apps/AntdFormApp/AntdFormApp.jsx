import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { motion, AnimatePresence } from "framer-motion";


const { Title, Paragraph } = Typography;

export default function App() {


// Обработка отправки формы
const onFinish = (values) => {
setSubmittedData([...submittedData, values]);
form.resetFields(); // очистим форму после отправки
};


return (
<div style={{ 
    maxWidth: 600,
    margin: "50px auto",
    padding: 30,
    background: "#fafafa",
    borderRadius: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
}}>
<Title level={2}
    style={{
    textAlign: "center",
    marginBottom: 30 }}>
            ✨ Форма с Ant Design ✨
</Title>


{/* Форма */}
<Form
form={form}
layout="vertical"
onFinish={onFinish}
style={{
    background: "white",
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
}}
>
<Form.Item
label="Имя"
name="name"
rules={[{
    required: true, message: "Пожалуйста, введите имя!"
}]}
>
<Input placeholder="Введите имя" />
</Form.Item>


<Form.Item
label="Описание"
name="description"
rules={[{
    required: true, message: "Пожалуйста, введите описание!"
}]}
>
<Input.TextArea placeholder="Введите описание" rows={4} />
</Form.Item>


<Form.Item>
<Button
    type="primary"
    htmlType="submit"
    block
    size="large"
    style={{ borderRadius: 8 }}
>
    🚀 Отправить
</Button>
</Form.Item>
</Form>


{/* Отображение введённых данных */}
{submittedData.length > 0 && (
<div style={{ marginTop: 30 }}>
    <Title level={3} style={{ marginBottom: 16 }}>📋 Отправленные данные</Title>
    <AnimatePresence>
        {submittedData.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ duration: 0.4 }}
style={{ marginBottom: 16 }}
>
<Card
    title={item.name}
    style={{ borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
>
    <Paragraph>{item.description}</Paragraph>
</Card>
</motion.div>
))}
</AnimatePresence>
</div>
)}
</div>
);
}
