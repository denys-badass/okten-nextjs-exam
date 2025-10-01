'use client'

import {IUser} from "@/models/IUser";
import {User} from "@heroui/user";
import {Popover, PopoverContent, PopoverTrigger} from "@heroui/popover";
import {Card, CardBody} from "@heroui/card";
import {Avatar} from "@heroui/avatar";
import {Button} from "@heroui/button";
import {useLogin} from "@/hooks/useLogin";
import styles from "./UserInfo.module.css";

type Props = {
    user: IUser;
}

export const UserInfo = ({user}: Props) => {
    const {logoutHandler} = useLogin();
    const {image, firstName, lastName, username, email} = user;

    return (
        <div className={styles.wrapper}>
            <Popover showArrow placement="bottom">
                <PopoverTrigger>
                    <User
                        avatarProps={{
                            src: image,
                            alt: "User Avatar"
                        }}
                        name={`${firstName} ${lastName}`}
                        description={username}
                        classNames={{
                            name: [styles.name],
                        }}
                    />
                </PopoverTrigger>
                <PopoverContent className={styles.popoverWrapper}>
                    <Card className={styles.popoverContainer} shadow="none">
                        <CardBody className={styles.card}>
                            <div className={styles.popoverUserInfo}>
                                <Avatar
                                    isBordered
                                    radius="full"
                                    size="lg"
                                    src={image}
                                    alt="User Avatar"
                                />
                                <div className={styles.popoverNameContainer}>
                                    <h4 className={styles.popoverName}>{`${firstName} ${lastName}`}</h4>
                                    <h5 className={styles.popoverEmail}>{email}</h5>
                                </div>
                            </div>
                            <div>
                                <Button variant='ghost' color='warning' fullWidth onPress={() => logoutHandler()}>Log out</Button>
                            </div>
                        </CardBody>
                    </Card>
                </PopoverContent>
            </Popover>

        </div>

    );
};