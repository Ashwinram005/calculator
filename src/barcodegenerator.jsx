import React, { useState } from 'react';
import Barcode from 'react-barcode';

const FixedSizeBarcodeGenerator = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter text for barcode"
            />
            {inputValue && (
                <div style={{ display:'flex', flexWrap:'wrap' ,width: '200px', height: '100px' }}>
                    <Barcode
                        value={inputValue}
                        format="CODE128"
                        width={2}  // Fixed width for bars
                        height={100} // Fixed height
                        displayValue={true} // Hide the text below the barcode
                    />
                </div>
            )}
        </div>
    );
};

export default FixedSizeBarcodeGenerator;