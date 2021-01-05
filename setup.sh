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


#FIXME: Modify this line to also include a virtualenv pointing to python 3.7 or earlier: source $python_dir/Scripts/activate

echo "Installing prerequisite Python packages"

pip3 install git+git://github.com/gunthercox/ChatterBot.git@master

echo "Installing core Python packages"

python -m pip install -r "${python_dir}/requirements.txt"