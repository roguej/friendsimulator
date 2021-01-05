#!/bin/bash

src_dir="src"
avatar_dir="${src_dir}/avatars"
python_installed=`command -v python`
python_dir="python"

[ $python_installed ] && echo "Python installed, continuing." || (echo "Python is not installed. Must quit." && exit 1);

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

echo "Installing prerequisite Python packages"

python -m pip install -r "${python_dir}/prereqs.txt"

echo "Installing core Python packages"

python -m pip install -r "${python_dir}/requirements.txt"