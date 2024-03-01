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
  onSelect: (args: string) => void;
}) => {

  const handleSelect = (e: any) => {
    onSelect(e.target.value);
  }

  return (
    <div className='flex gap-2 w-full min-w-48'>
      <select onChange={handleSelect} defaultValue={defaultOptionName} className='select w-full'>
        <option>
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
