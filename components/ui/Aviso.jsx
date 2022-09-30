import { Button, Modal } from 'antd';



const Aviso = ({isModalOpen, setIsModalOpen, titulo, description}) => {


  
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <>
      
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
      
      footer={[
        
        <Button key="submit" type="primary"  onClick={handleOk}>
          Ok
        </Button>
       
      ]}
      >
        <p>¡Gracias por enviar tu información! Hemos recibido tu curriculum correctamente. Nuestro equipo se encargará de valorarlo, en caso de que tu perfil se adapte a nuestras necesidades, nos pondremos en contacto contigo lo antes posible. ¡Mucho éxito!</p>
      </Modal>
    </>
  )
}

export default Aviso