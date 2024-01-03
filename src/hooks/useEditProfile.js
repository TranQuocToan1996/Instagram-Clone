import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);

    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return;
        setIsUpdating(true);

        const storageRef = ref(storage, `profilePics/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        try {
            let URL = authUser.profilePicURL
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, "data_url");
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL,
            };

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setUserProfile(updatedUser);
            setAuthUser(updatedUser);
            showToast("Success", "Profile updated successfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false)
        }
    };

    return { editProfile, isUpdating };
};

export default useEditProfile;