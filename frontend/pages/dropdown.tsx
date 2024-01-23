import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}

interface DropDownProps {
    onSelectedValueChange: (value: string) => void; // Callback to notify parent component about the selected value change
    required?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ onSelectedValueChange, required=false }) => {
    const [selectedValue, setSelectedValue] = useState<string>(''); // State to store the selected value

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelectedValueChange(value); // Notify the parent component about the selected value change
    };

    return (
        <Menu as="div" className={`mt-1 ${required ? 'required' : ''}`}>
            <div>
                <Menu.Button className="w-[25.3vw] gap-x-1.5 text-left rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-400 shadow-sm ring-1 ring-inset ring-slate-900 hover:bg-slate-900">
                    {selectedValue || 'Sketch'}
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 float-right" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute mt-2 w-[25.5vw] origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    onClick={() => handleSelect('Sketch')}
                                    className={classNames(
                                        active ? 'bg-slate-800 text-slate-400' : 'text-gray-400',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Sketch
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    onClick={() => handleSelect('Colors')}
                                    className={classNames(
                                        active ? 'bg-slate-800 text-slate-400' : 'text-gray-400',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Colors
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    onClick={() => handleSelect('Cut and Crop')}
                                    className={classNames(
                                        active ? 'bg-slate-800 text-slate-400' : 'text-gray-400',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Cut and Crop
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    onClick={() => handleSelect('Draw.io')}
                                    className={classNames(
                                        active ? 'bg-slate-800 text-slate-400' : 'text-gray-400',
                                        'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Draw.io
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropDown;

