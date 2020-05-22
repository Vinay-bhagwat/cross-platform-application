import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

const { Filesystem } = Plugins;

const fileWrite = async (dataToWrite: string, path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage'|string) => {
    try {
        return await Filesystem.writeFile({
            path: path,
            data: dataToWrite,
            directory: FilesystemDirectory[folder],
            encoding: FilesystemEncoding.UTF8
        })
    } catch (e) {
        return e
    }
}

const fileRead = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    return await Filesystem.readFile({
        path: path,
        directory: FilesystemDirectory[folder],
        encoding: FilesystemEncoding.UTF8
    });

}

const fileAppend = async (dataToAppend: string, encoding: 'ASCII' | 'UTF16' | 'UTF8', path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    return await Filesystem.appendFile({
        path: path,
        data: dataToAppend,
        directory: FilesystemDirectory[dataToAppend],
        encoding: FilesystemEncoding[encoding]
    });
}

const fileDelete = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    return await Filesystem.deleteFile({
        path,
        directory: FilesystemDirectory[folder]
    });
}

const makeDirectory = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage', recursive: boolean) => {
    try {
        return await Filesystem.mkdir({
            path: path,
            directory: FilesystemDirectory[folder],
            recursive: recursive
        });
    } catch (e) {
        return e
    }
}

const removeDirectory = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage', recursive: boolean) => {
    try {
        return await Filesystem.rmdir({
            path,
            directory: FilesystemDirectory[folder],
            recursive,
        });
    } catch (e) {
        return e
    }
}

const readDirectory = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    try {
        return await Filesystem.readdir({
            path,
            directory: FilesystemDirectory[folder]
        });
    } catch (e) {
        return e
    }
}

const stat = async (path: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    try {
        return await Filesystem.stat({
            path,
            directory: FilesystemDirectory[folder]
        });
    } catch (e) {
        return e
    }
}

const readFilePath = async (fullPathToFile: string) => {
    try {
        return await Filesystem.readFile({
            path: fullPathToFile
        })
    } catch (e) {
        return e

    }
}

const rename = async (filePathWithName: string, rename: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    try {

        return await Filesystem.rename({
            from: filePathWithName,
            to: rename,
            directory: FilesystemDirectory[folder]
        });
    } catch (e) {
        return e;
    }
}

const copy = async (filePathWithName: string, copyPath: string, folder: 'Documents' | 'Cache' | 'Data' | 'External' | 'ExternalStorage') => {
    try {
        return await Filesystem.copy({
            from: filePathWithName,
            to: copyPath,
            directory: FilesystemDirectory[folder]
        });
    } catch (e) {
        return e
    }
}

export const FileManager = {
    fileWrite,
    copy,
    rename,
    readFilePath,
    stat,
    readDirectory,
    removeDirectory,
    makeDirectory,
    fileDelete,
    fileAppend,
    fileRead
}