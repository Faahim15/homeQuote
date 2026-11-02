import { Text, View,ScrollView } from "react-native";
import CustomHeader from "../../../components/client/CustomHeader"; 
import TopServiceProviders from '../../../components/client/TopServiceProviders'

export default function ServiceProviderScreen(){
    return (
        <View className='flex-1 bg-[#F9F9F9]' >
           <CustomHeader title='Service Providers' /> 
           <ScrollView className='flex-1 ' >
            <TopServiceProviders/>
           </ScrollView>
        </View>
    );
}