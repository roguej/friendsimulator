#!/bin/bash

avatar_dir="/usr/app/avatars"

generate_avatars(){
	echo "Generating 200 profile pictures"
		for i in {1..200}
			do
				curl https://thispersondoesnotexist.com/image > "$avatar_dir/avatar$i.png"
			done
}

if [ -d $avatar_dir ]
	then 
		echo "Avatar directory exists already. Skipping avatar directory creation."
	else
		mkdir $avatar_dir
fi;

[ "$(ls -A $avatar_dir/)" ] && echo "Avatar directory is not empty. Assuming there are images already" || generate_avatars

