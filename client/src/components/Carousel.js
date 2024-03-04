import React, {useEffect, useRef} from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';
import {useAtom} from 'jotai';
import {imageIndexAtom} from '../stores';
import HomeStyle from '../styles/HomeStyle';

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useAtom(imageIndexAtom);
    const scrollViewRef = useRef(null);
    const {width} = Dimensions.get('window');

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
            scrollViewRef.current.scrollTo({
                x: width * newIndex,
                animated: true,
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length, setCurrentIndex]);

    const handleScroll = (event) => {
        const imageOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(imageOffset / width);
        setCurrentIndex(index);
    };

    return (
        <View style={HomeStyle.carouselContainer}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={{
                            width,
                            height: 300,
                            resizeMode: 'cover',
                        }}
                    />
                ))}
            </ScrollView>
            <View style={HomeStyle.paginationContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            HomeStyle.paginationDot,
                            index === currentIndex &&
                                HomeStyle.paginationDotActive,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default Carousel;
