'use client'

import {IUser} from "@/models/IUser";
import {User} from "@heroui/user";
import {Popover, PopoverContent, PopoverTrigger} from "@heroui/popover";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Avatar} from "@heroui/avatar";
import {Button} from "@heroui/button";
import {useLogout} from "@/hooks/useLogout";
import styles from "./UserInfo.module.css";
import {useLogin} from "@/hooks/useLogin";

type Props = {
    user: IUser;
}

export const UserInfo = ({user}: Props) => {
    const {logoutHandler} = useLogin();
    const {image, firstName, lastName, username, email} = user;

    return (
        <div className={styles.wrapper}>
            <Popover showArrow placement='bottom'>
                <PopoverTrigger>
                    <User
                        avatarProps={{
                            src: image,
                            alt: 'User Avatar'
                        }}
                        name={`${firstName} ${lastName}`}
                        description={username}
                        classNames={{
                            name: [styles.name],
                        }}
                    />
                </PopoverTrigger>
                <PopoverContent className='bg-slate-50 dark:bg-slate-800'>
                    <Card className="max-w-[300px] border-none bg-transparent" shadow="none">
                        <CardBody className="justify-between gap-4">
                            <div className="flex gap-3">
                                <Avatar
                                    isBordered
                                    radius='full'
                                    size='lg'
                                    src={image}
                                    alt='User Avatar'
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{`${firstName} ${lastName}`}</h4>
                                    <h5 className="text-small tracking-tight text-default-500">{email}</h5>
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