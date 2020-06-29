import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import {
    AppForm,
    AppFormField as FormField,
    AppFormPicker as FormPicker,
    SubmitButton,
} from "../components/forms";
import AppScreen from '../components/AppScreen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
    { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
    { label: "Furniture", value: 4, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 5, backgroundColor: "green", icon: "email" },
    { label: "Camera", value: 6, backgroundColor: "blue", icon: "lock" },
    { label: "Furniture", value: 7, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 8, backgroundColor: "green", icon: "email" },
    { label: "Camera", value: 9, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField
                    maxLength={255} name="title" placeholder="Title"
                />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <FormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})

export default ListingEditScreen;