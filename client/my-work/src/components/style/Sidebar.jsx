import React from "react";
import Ticket from "../../assets/Ticket.png";
import Subtract from '../../assets/Subtract (3).png'

const Sidebar = () => {

    const data = [
        [Ticket, 'Dashboard'],
        [Ticket, 'Upload'],
        [Ticket, 'Invoice'],
        [Ticket, 'Calendar'],
        [Ticket, 'Calendar'],
        [Ticket, 'Notifications'],
        [Ticket, 'Setting']
      ];
      
      return (
        <div className="p-3 mt-10 ml-10  bg-[#ffff] shadow-xl w-[250px] hidden md:block">
          <div className="flex gap-x-2">
            <img src={Subtract} alt="" />
            <p className="font-semibold text-2xl">Base</p>
          </div>
          <div>
            <div className="space-y-8 mt-10">
              {data.map((item, index) => (
                <div key={index} className="flex gap-x-5">
                  <img src={item[0]} alt="" />
                  <p className="text-lg font-medium text-gray-400">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
};

export default Sidebar;
