# Uploads all updated files in the directory to the s3 bucket and makes them public

if [[ $# -ne 1 ]]; then
  echo "Run script: ./upload_files.sh <profile_name>"
  exit 2
fi

aws s3 sync . s3://www.snapcreativechallenge.com --exclude '.git/*' --acl public-read --profile $1
