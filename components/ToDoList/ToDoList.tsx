import { ToDoSchema } from "../../constants/types";
import { Text } from "../Themed";
import { FlatList, View, StyleSheet } from "react-native";


export interface ToDoListProps {
    list: ToDoSchema,
}

const ToDoList = (props: ToDoListProps) => {

    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    );

    const stack =
        <FlatList
            data={props.list.schema}
            renderItem={({ item }) => <Item title={item.name} />}
        />
        ;
    return <View>{stack}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});


export default ToDoList;