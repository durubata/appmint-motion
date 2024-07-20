import React, { useEffect, useState } from 'react';
import { IconContact, IconProfile, IconUsers } from '../common/icons';
import { ChatContacts } from './chat-contacts';
import { ChatInfo } from './sidebar-info';
import { useChatStore } from 'chat-store';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const iconSize = 14;

export const ChatContactSideBar = () => {
  const { setStateItem, sidebarOpen } = useChatStore((state: any) => ({ setStateItem: state.setStateItem, sidebarOpen: state.sidebarOpen }), (ov, nv) => false)

  const [activeTab, setActiveTab] = useState(0);
  const [searchKey, setSearchKey] = useState('')

  const handleChange = (e) => {
    setSearchKey(e.target.value())
  }
  const handleClose = (e) => {
    setStateItem({ sidebarOpen: !sidebarOpen })
  }
  return (
    <div className='transition-all absolute w-80 top-[50px] bg-white h-[calc(100%-51px)] p-2 shadow duration-200' style={{ right: !sidebarOpen ? -440 : 0 }} >
      <div className="chat-contact-sidebar-header mb-4">
        <div className='flex gap-2 item-center justify-start' >
          <button title="Contact" className='rounded-xl w-8 h-8 p-2 bg-gray-100 hover:scale-125 duration-100' onClick={handleClose} > <IoMdArrowForward /></button>
          <button title="Contact" className='rounded-xl w-8 h-8 p-2 bg-gray-100 hover:scale-125 duration-100' onClick={() => setActiveTab(0)} ><IconContact size={iconSize} /></button>
          <button title="Group" className='rounded-xl w-8 h-8 p-2 bg-gray-100 hover:scale-125 duration-100' onClick={() => setActiveTab(1)} ><IconUsers size={iconSize} /></button>
          <button title="Profile" className='rounded-xl w-8 h-8 p-2 bg-gray-100 hover:scale-125 duration-100' onClick={() => setActiveTab(2)} ><IconProfile size={iconSize} /></button>
        </div>
      </div>
      <>
        <div className='w-full'>
          <input className='w-full py-1  px-2 border-2 rounded-xl text-xs' type="text" value={searchKey} placeholder="Search" onChange={handleChange} />
        </div>
        <div className='chat-sidebar-content text-sm'>
          {activeTab == 0 && <ChatContacts />}
          {activeTab == 1 && <ChatInfo />}
        </div>
      </>
    </div>
  )
};
