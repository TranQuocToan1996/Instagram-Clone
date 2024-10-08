import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const { userProfile, setUserProfile } = useUserProfileStore();
    const showToast = useShowToast();

    const handleFollowUser = async () => {
        if (userId === authUser.uid) {
            showToast("Error", "can not follow your account", "error");
            return
        }
        setIsUpdating(true);
        let newAuthUser
        try {
            const currentUserRef = doc(firestore, "users", authUser.uid);
            const userToFollowOrUnfollorRef = doc(firestore, "users", userId);
            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
            });

            await updateDoc(userToFollowOrUnfollorRef, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            if (isFollowing) {
                // unfollow
                newAuthUser = {
                    ...authUser,
                    following: authUser.following.filter((uid) => uid !== userId),
                }

                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                        followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
                    });

                setIsFollowing(false);
            } else {
                // follow
                newAuthUser = {
                    ...authUser,
                    following: [...authUser.following, userId],
                }

                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                        followers: [...userProfile.followers, authUser.uid],
                    });

                setIsFollowing(true);
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            localStorage.setItem(
                "user-info",
                JSON.stringify(newAuthUser)
            );
            setAuthUser(newAuthUser);
            setIsUpdating(false);
        }
    };

    useEffect(() => {
        if (authUser) {
            const isFollowing = authUser.following.includes(userId);
            setIsFollowing(isFollowing);
        }
    }, [authUser, userId]);

    return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;