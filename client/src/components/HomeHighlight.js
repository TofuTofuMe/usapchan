import React from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import {useAtom} from 'jotai';
import {showBodyAtom} from '../stores';

const HomeHighlight = ({title, date, author, body}) => {
    const [showBody, setShowBody] = useAtom(showBodyAtom);
    const toggleBodyDisplay = () => {
        setShowBody(!showBody);
    };
    const displayBody = showBody ? body : body.slice(0, 150);
    const displayText =
        body.length > 150 && !showBody ? `${displayBody}...` : displayBody;

    return (
        <View style={{width: '100%'}}>
            <View style={HomeStyle.announcementContent}>
                <View>
                    <Image
                        source={require('../assets/bannerAnnouncement.png')}
                        style={HomeStyle.announcementImage}
                    />
                    <Text style={HomeStyle.announcementTitle}>{title}</Text>
                    <Text style={HomeStyle.announcementDate}>{date}</Text>
                    <Text style={HomeStyle.announcementAuthor}>{author}</Text>
                    <Text style={HomeStyle.announcementBodyText}>
                        {displayText}
                    </Text>
                    {body.length > 100 && (
                        <Pressable
                            onPress={toggleBodyDisplay}
                            style={({pressed}) => [
                                {
                                    backgroundColor: '#99BC85',
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    marginTop: -30,
                                },
                                pressed && {opacity: 0.5},
                            ]}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>
                                {showBody ? 'See less' : 'See more'}
                            </Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

export default HomeHighlight;
