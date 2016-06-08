#!/bin/bash
echo "Home directory is: $HOME"
echo "deploy.sh: directory = $PWD"
echo "TRAVIS_REPO_SLUG = $TRAVIS_REPO_SLUG"
echo "REPOSITORY_NAME = $(echo $TRAVIS_REPO_SLUG | gawk -F/ '{print $2}')"
shopt -s extglob

if [ $TRAVIS_PULL_REQUEST = false ]
then
    echo "targetBranch = master"
    git config --global user.email $GIT_USER_EMAIL
    git config --global user.name $GIT_USER_NAME

    echo "Starting deployment ... "

    git clone https://github.com/house-lending-apps/HouseLendingDeployable $targetBranch
    git checkout $targetBranch

    cd HouseLendingDeployable

    cp -r $REPOSITORY_NAME/dist/. .
    echo "Pushing to $targetBranch"

    git add -f -all
    git commit -a -m 'bumped the version [ci skip]'
    git push -f --set-upstream origin $targetBranch

else
        echo 'No need to deploy.'
fi
