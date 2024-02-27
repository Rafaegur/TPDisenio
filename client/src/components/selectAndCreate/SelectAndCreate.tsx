'use client';
import Image from 'next/image';

export const SelectAndCreate = ({
  newItemImg,
  options,
  defaultOptionName,
  onSelect,
}: {
  newItemImg: any;
  options: string[];
  defaultOptionName: string;
  onSelect: () => void;
}) => {
  return (
    <div className='flex gap-2 w-full min-w-48'>
      <select onChange={onSelect} className='select w-full'>
        <option selected value={''}>
          {defaultOptionName}
        </option>
        {options.map((option: string, key: number) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className='btn btn-square'>
        <Image src={newItemImg} width={18} alt='newItem'></Image>
      </button>
    </div>
  );
};
