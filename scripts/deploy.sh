curl -X POST -G \
'https://api.glitch.com/project/githubImport' \
-d token=${GLITCH_TOKEN} \
-d projectId=${GLITCH_PROJECT_ID} \
-d repo=${GLITCH_REPO}
