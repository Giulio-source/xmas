CUR_DIR := $$(pwd)
PROJECT_NAME := xmas-hinto-com-apis

BUCKET_NAME := hinto-xmas-hinto-com
AWS_PROFILE := hinto-cloud-hinto

build-static:
	{ \
		docker run \
			-v ${CUR_DIR}:${CUR_DIR} \
			-w ${CUR_DIR} \
			node:17.4.0 npm run build-static \
		; \
	}
	for file in $(CUR_DIR)/out/cartolina/*.html ; do \
        mv -- $$file "$${file%%.html}"; \
    done
	for file in $(CUR_DIR)/out/risultati/*.html ; do \
        mv -- $$file "$${file%%.html}"; \
    done

upload: build-static
	{ \
		aws s3 cp \
			$(CUR_DIR)/out/cartolina s3://$(BUCKET_NAME)/cartolina \
			--cache-control 'max-age=604800' \
			--content-type text/html \
			--profile $(AWS_PROFILE) \
			--recursive \
		; \
		aws s3 cp \
			$(CUR_DIR)/out/risultati s3://$(BUCKET_NAME)/risultati \
			--cache-control 'max-age=604800' \
			--content-type text/html \
			--profile $(AWS_PROFILE) \
			--recursive \
		; \
		aws s3 sync \
			--cache-control 'max-age=604800' \
			--exclude index.html \
			$(CUR_DIR)/out s3://$(BUCKET_NAME)/ \
			--profile $(AWS_PROFILE) \
		; \
		aws s3 sync \
			--cache-control 'no-cache' \
			$(CUR_DIR)/out s3://$(BUCKET_NAME)/ \
			--profile $(AWS_PROFILE) \
		; \
	}
