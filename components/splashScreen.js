import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logoInnosoft from "../assets/logo-innosoft.png"
import logoUsbicate from "../assets/USbicate.png"
import Home from './home';


export default function SplashScreen() {

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleLogo2 = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveLogo2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {

        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height + (edges.top + 65),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 0.5,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo2,
                    {
                        // Scaling to 0.8
                        toValue: 0.5,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 35,
                            y: (Dimensions.get('window').height / 2) + 35
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo2,
                    {
                        // Moving to Left Most...
                        toValue: {
                            x: (Dimensions.get('window').width/2) - 365,
                            y: (Dimensions.get('window').height / 2) - 80
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 1500);

    }, [])

    // Going to Move Up like Nav Bar...
    return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
                flex: 1,
                backgroundColor: 'white',
                zIndex: 1,
                transform: [
                    { translateY: startAnimation }
                ]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Animated.Image source={logoInnosoft} style={{
                        width: 100,
                        height: 100,
                        marginBottom: 20,
                        marginRight: 10,
                        transform: [
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },

                        ]
                    }}></Animated.Image>

                    <Animated.Image source={logoUsbicate} style={{
                        width: 200,
                        height: 100,
                        marginBottom: 20,
                        transform: [
                            { translateX: moveLogo2.x },
                            { translateY: moveLogo2.y },
                            { scale: scaleLogo2 },

                        ]
                    }}></Animated.Image>

                </Animated.View>

            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>
                <Home></Home>
            </Animated.View>
            
        </View>
    );
}