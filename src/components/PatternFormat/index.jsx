import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format'; 
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export function InputTelefone() {
  const [telefone, setTelefone] = useState(''); 

  const { personalizarPer } = use(CardapioContext);

  const handlePhoneChange = (values) => {
    setTelefone(values.value); 
  };

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor="whatsapp" className='font-medium text-[15px]'>Telefone (WhatsApp)</label>
      
      <PatternFormat 
        format="(##) #####-####" 
        mask="_"                 
        allowEmptyFormatting       
        onValueChange={handlePhoneChange}
        id="whatsapp"
        type="tel"
        placeholder="(73) 99999-9999"
        defaultValue={personalizarPer?.telefone}
        className="border-1 border-[#5c5b5b] rounded-xl p-3 text-[#5c5b5b]" 
      />
    </div>
  );
}