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
        
        

        <button className='btn btn-success text-white' key="submit" type="primary"  onClick={handleOk}>Ok</button>

       
      ]}
      >
        <p>¡Gracias! Hemos recibido tu información correctamente. En caso de que tu perfil se adapte a alguna de nuestras vacantes, nos pondremos en contacto contigo lo antes posible. ¡Mucho éxito!</p>
      </Modal>
    </>
  )
}

export default Aviso