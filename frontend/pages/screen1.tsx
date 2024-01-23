import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DropDown from './dropdown';

export default function Home() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [thumbnailImage, setSourceFile] = useState<File | null>(null);

    const handleFileChangeThumbnailImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSourceFile(file || null);
    };

    const [sourceFile, setThumbnailImage] = useState<File | null>(null);

    const handleFileChangeSourceFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setThumbnailImage(file || null);
    };

    var dropdown = "";

    const handleSubmit = () => {
        const authorizationKey = document.getElementsByName("key")[0] as HTMLInputElement;
        const tags = document.getElementsByName("tags")[0] as HTMLInputElement;
        const title = document.getElementsByName("title")[0] as HTMLInputElement;
        const date = document.getElementsByName("date")[0] as HTMLInputElement;
        const description = document.getElementsByName("description")[0] as HTMLInputElement;

        if (!authorizationKey.value || !tags.value || !title.value || !date.value || !description.value || !sourceFile || !thumbnailImage || !dropdown) {
            alert("Please fill in all required fields !!");
            return;
        }

        console.log("Form submitted successfully!");
        window.location.reload();
    }

    const handleSelectedValueChange = (value: string) => {
        // console.log('Selected value:', value);
        dropdown = value;
    };

    return (
        <main className='bg-gridBackground bg-cover py-20'>
            <div className='bg-slate-800 bg-opacity-80 w-[85vw] h-[800px] ml-[7vw] py-10'>
                <p className='text-white font-semibold text-base text-center'>UIDesignDaily</p>
                <p className='text-white font-bold text-xl text-center mt-10'>Upload Files</p>

                <label className="block w-[30%] ml-[19%] mt-14">
                    {/* <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300"> */}
                    <span className="block text-sm font-medium text-slate-300">
                        Authorization Key
                    </span>
                    <input type="password" name="key" required className="mt-1 px-3 py-2 bg-slate-800 border shadow-sm border-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-pink-500 w-full rounded-md sm:text-sm focus:ring-1 text-slate-300 block" placeholder="Authorization Key" />
                </label>

                <label className="block w-[30%] float-right mr-[18.5%] -mt-[10.15vh]">
                    <span className="block text-sm font-medium text-slate-300">
                        Tags (Comma Separated)
                    </span>
                    <input type="text" name="tags" required className="mt-1 px-3 py-2 bg-slate-800 border shadow-sm border-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-pink-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-300" placeholder="Tags (Comma Separated)" />
                </label>

                <label className="block w-[30%] ml-[19%] mt-4">
                    <span className="block text-sm font-medium text-slate-300">
                        Title
                    </span>
                    <input type="text" name="title" required className="mt-1 px-3 py-2 bg-slate-800 border shadow-sm border-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-pink-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-300" placeholder="Title" />
                </label>

                <label className="block w-[30%] float-right mr-[18.5%] -mt-[10.15vh]">
                    <span className="block text-sm font-medium text-slate-300">
                        Date
                    </span>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        className="mt-1 px-3 py-2 bg-slate-800 border shadow-sm border-slate-900 text-slate-300 text-sm rounded-md focus:outline-none focus:border-pink-500 focus:ring-pink-500 focus:ring-1 block w-[167.5%]"
                        placeholderText="DD/MM/YYYY"
                        name='date'
                        required
                    />
                </label>

                <label className="block w-[30%] ml-[19%] mt-4">
                    <span className="block text-sm font-medium text-slate-300">
                        Description
                    </span>
                    <div className="flex items-center justify-center">
                        <textarea name='description' required className="mt-1 px-3 py-2 h-[31vh] bg-slate-800 border shadow-sm border-slate-900 resize-none overflow-y-auto placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-pink-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-300" placeholder="Description"></textarea>
                    </div>
                </label>

                <label className="block w-[30%] float-right mr-[18.5%] -mt-[35vh]">
                    <span className="block text-sm font-medium text-slate-300">
                        Software
                    </span>
                    <DropDown onSelectedValueChange={handleSelectedValueChange} required={true} />
                </label>

                <label className="block w-[30%] float-right mr-[18.5%] -mt-[22.75vh]">
                    <span className="block text-sm font-medium text-slate-300">
                        Thumbnail Image
                    </span>
                    <input
                        type="file"
                        className="block w-full text-sm text-slate-300 mt-1
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md
                        file:border file:border-solid
                        file:text-sm file:font-semibold
                        file:bg-slate-800 file:text-slate-400
                        hover:file:bg-slate-900
                        hover:file:cursor-pointer"
                        onChange={handleFileChangeThumbnailImage}
                        required
                    />
                </label>

                <label className="block w-[30%] float-right mr-[18.5%] -mt-[10vh]">
                    <span className="block text-sm font-medium text-slate-300">
                        Source File
                    </span>
                    <input
                        type="file"
                        className="block w-full text-sm text-slate-300 mt-1
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md
                        file:border file:border-solid
                        file:text-sm file:font-semibold
                        file:bg-slate-800 file:text-slate-400
                        hover:file:bg-slate-900
                        hover:file:cursor-pointer"
                        onChange={handleFileChangeSourceFile}
                        required
                    />
                </label>

                <button onClick={handleSubmit} className='bg-pink-500 w-[400px] h-[50px] mt-[5%] rounded-md hover:bg-pink-600 ml-[31%]'>
                    <p className='text-white font-bold text-1xl px-6 py-4'> Submit </p>
                </button>
            </div>
        </main>
    )
}

