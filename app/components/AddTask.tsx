'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskvalue] = useState<string>('');

  const handleSubmission: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    });
    setNewTaskvalue('');
    setModalOpen(false);
    router.refresh();
  }

  return (
  <div>
    <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full font-bold text-white">
      ADD ITEM <AiOutlinePlus size={18} />
    </button>

    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmission}>
        <h3 className='font-bold text-lg'>Add new task</h3>
        <div className='modal-action'>
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskvalue(e.target.value)}
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <button type='submit' className='btn '>Submit</button>
        </div>
      </form>
    </Modal>
  </div>
  );
};

export default AddTask;
