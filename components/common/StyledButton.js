import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const StyledButton = ({
    title, large, iconRight, onPress, onLongPress, icon, 
    backgroundColor, borderRadius, color, fontSize, raised, 
    disabled, disabledStyle, textStyle, underlayColor, style, fontWeight, buttonStyle
}) => {
    return (
        <View>
            <Button 
            style={[styles.buttonStyle, style]}
            title={title}

            iconRight={iconRight}
            icon={icon}

            backgroundColor={backgroundColor || "royalblue"}
            borderRadius={borderRadius}

            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight || 'bold'}
            
            textStyle={textStyle}
            buttonStyle={buttonStyle}
            underlayColor={underlayColor}
            raised={raised || true}
            large={large}

            disabled={disabled}
            disabledStyle={disabledStyle}  
            
            onPress={onPress}
            onLongPress={onLongPress}
                      
            />
        </View>
    )
}

const styles = {
    buttonStyle: {
        maxWidth:400,
        marginTop: 0,
        paddingTop: 10,
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
}

export { StyledButton }