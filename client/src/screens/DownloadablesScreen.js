import {React} from 'react';
import {View} from 'react-native';
import {DownloadablesList, DownloadablesOption} from '../components';
import DownloadablesStyle from '../styles/DownloadablesStyle';
import {
    studentFilesAtom,
    facultyFilesAtom,
    studentOptionAtom,
    facultyOptionAtom,
} from '../stores';
import {useAtom} from 'jotai';

const DownloadablesScreen = () => {
    const [showStudentFiles, setShowStudentFiles] = useAtom(studentFilesAtom);
    const [showFacultyFiles, setShowFacultyFiles] = useAtom(facultyFilesAtom);
    const [showStudentOption, setShowStudentOption] =
        useAtom(studentOptionAtom);
    const [showFacultyOption, setShowFacultyOption] =
        useAtom(facultyOptionAtom);

    const handleStudentPress = () => {
        setShowStudentFiles(!showStudentFiles);
        setShowStudentOption(!showStudentOption);
    };

    const handleFacultyPress = () => {
        setShowFacultyFiles(!showFacultyFiles);
        setShowFacultyOption(!showFacultyOption);
    };

    const studentFiles = [
        {filename: 'Student File 1'},
        {filename: 'Student File 2'},
        {filename: 'Student File 3'},
    ];

    const facultyFiles = [
        {filename: 'Faculty File 1'},
        {filename: 'Faculty File 2'},
        {filename: 'Faculty File 3'},
    ];

    return (
        <View style={DownloadablesStyle.flexView}>
            {showFacultyOption && (
                <DownloadablesOption
                    title="For Students"
                    onPress={handleStudentPress}
                />
            )}
            {showStudentFiles && <DownloadablesList files={studentFiles} />}
            {showStudentOption && (
                <DownloadablesOption
                    title="For Faculties"
                    onPress={handleFacultyPress}
                />
            )}
            {showFacultyFiles && <DownloadablesList files={facultyFiles} />}
        </View>
    );
};

export default DownloadablesScreen;
