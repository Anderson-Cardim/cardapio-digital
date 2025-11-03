import { Input } from "../Input/index";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";


export const ImagemUploadInput = ({className}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
            alert('Por favor, selecione um arquivo de imagem (JPG, PNG, GIF, etc.).');
        }
    }

    return (
        <div className={className}>
            <div className="flex flex-col justify-center items-center">
                <FaCamera size={25}/>
                <label htmlFor="image-upload" className="cursor-pointer text-black font-medium text-[14px] py-2 px-4">Clique para fazer upload</label>

            </div>
            <Input
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            {previewUrl && (
                <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Pré-visualização:</p>
                <img 
                    src={previewUrl} 
                    alt="Pré-visualização da imagem" 
                    className="max-w-xs max-h-48 rounded-md shadow-md" 
                />
                <p className="mt-2 text-sm text-gray-700">{selectedFile.name}</p>
                </div>
            )}
        </div>
    );
}