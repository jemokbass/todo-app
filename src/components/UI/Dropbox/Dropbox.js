import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

import { LanguageContext } from '@src/shared/context';

const Dropbox = ({ control, name, errors, errorsMessage }) => {
  const resources = useContext(LanguageContext);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange} maxFiles={1} maxSize={100000}>
            {({ getRootProps, getInputProps }) => (
              <div className="dropbox" {...getRootProps()}>
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>{resources.dropbox_desc}</p>
              </div>
            )}
          </Dropzone>
          <ul className="dropbox-list">
            {value?.map((file, index) => (
              <li className="dropbox-item" key={index}>
                <span className="dropbox-item__title">{file.name}</span>
                <span className="dropbox-item__size">{file.size} bytes</span>
              </li>
            ))}
          </ul>
          {errors && <span className="input-field__error">{errorsMessage}</span>}
        </>
      )}
    />
  );
};

export default Dropbox;
